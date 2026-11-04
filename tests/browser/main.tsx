import { useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { Button, BulmaRoot } from '../../src'
import * as custom from '../../.generated/custom-ui'
import '../../.generated/default.css'
import '../../.generated/custom.css'
import './host.css'
import { InteractiveFixture } from './interactive-fixture'
import { CatalogFixture } from './catalog-fixture'

function Fixture() {
  const button = useRef<HTMLButtonElement>(null)
  const root = useRef<HTMLDivElement>(null)
  const [clicks, setClicks] = useState(0)
  const [loading, setLoading] = useState(false)
  return (
    <>
      <h1>React Bulma regression fixture</h1>
      <button className="button mt-4" data-testid="outside">
        Host button
      </button>
      <p data-testid="outside-text">Host text</p>
      <BulmaRoot
        ref={root}
        data-testid="default-root"
        tabIndex={-1}
        helpers={{ p: 4 }}
      >
        <h2>Default prefix</h2>
        <Button data-testid="default" color="primary" helpers={{ mt: 0 }}>
          Default Button
        </Button>
        <Button data-testid="focus" ref={button} helpers={{ ml: 4 }}>
          Ref target
        </Button>
        <Button onClick={() => button.current?.focus()} helpers={{ ml: 4 }}>
          Focus button ref
        </Button>
        <Button onClick={() => root.current?.focus()} helpers={{ ml: 4 }}>
          Focus root ref
        </Button>
        <p data-testid="centered" className="rb-has-text-centered">
          Centered text
        </p>
        <Button data-testid="hidden-mobile" helpers={{ hidden: 'mobile' }}>
          Desktop only
        </Button>
        <custom.BulmaRoot
          data-testid="custom-root"
          helpers={{ mt: 4, display: 'inline-block' }}
        >
          <h2>Custom prefix nested inside default</h2>
          <custom.Button
            data-testid="custom"
            color="primary"
            helpers={{ mt: 0 }}
          >
            Custom Button
          </custom.Button>
          <p
            className={custom.helpers({
              textColor: 'danger',
              textWeight: 'bold',
            })}
          >
            Custom helpers
          </p>
        </custom.BulmaRoot>
        <Button
          data-testid="loading"
          loading={loading}
          onClick={() => {
            setClicks((count) => count + 1)
            setLoading(true)
          }}
        >
          Submit once
        </Button>
        <output data-testid="clicks">{clicks}</output>
        <Button onClick={() => setLoading(false)} helpers={{ ml: 4 }}>
          Finish loading
        </Button>
      </BulmaRoot>
      <InteractiveFixture />
      <CatalogFixture />
    </>
  )
}

createRoot(document.getElementById('app')!).render(<Fixture />)
