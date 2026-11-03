import { useRef, useState } from 'react';
import * as ui from '../../src';
import '../../.generated/reserved-prefix.css';

const custom = ui.createBulma({ prefix: 'acme-' });
const reserved = ui.createBulma({ prefix: 'is-' });

const picture = `data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="160" height="120"><rect width="160" height="120" fill="#00d1b2"/></svg>')}`;

export function CatalogFixture() {
  const input = useRef<HTMLInputElement>(null);
  const select = useRef<HTMLSelectElement>(null);
  const textarea = useRef<HTMLTextAreaElement>(null);
  const file = useRef<HTMLInputElement>(null);
  const image = useRef<HTMLImageElement>(null);
  const [filename, setFilename] = useState('');
  const [submitted, setSubmitted] = useState('');
  const [disabledClicks, setDisabledClicks] = useState(0);
  const [tag, setTag] = useState(true);
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('light');
  const [linkClicks, setLinkClicks] = useState(0);
  return (
    <section aria-label="Component catalog">
      <ui.BulmaRoot theme={theme} data-testid="catalog-root" helpers={{ p: 4 }}>
        <ui.Title level={2} size={3}>
          Component catalog
        </ui.Title>
        <ui.Button
          onClick={() =>
            setTheme((value) => (value === 'dark' ? 'light' : 'dark'))
          }
        >
          Toggle catalog theme
        </ui.Button>
        <ui.Button onClick={() => setTheme('system')}>
          Follow system theme
        </ui.Button>
        <ui.LinkButton
          loading
          href="#loading-link"
          onClick={() => setLinkClicks((value) => value + 1)}
        >
          Loading link
        </ui.LinkButton>
        <ui.LinkButton
          href="#enabled-link"
          onClick={() => setLinkClicks((value) => value + 1)}
        >
          Enabled link
        </ui.LinkButton>
        <output data-testid="catalog-link-clicks">{linkClicks}</output>
        <ui.Breadcrumb helpers={{ mt: 4 }}>
          <ui.BreadcrumbItem href="#home">Home</ui.BreadcrumbItem>
          <ui.BreadcrumbItem active href="#catalog">
            Catalog
          </ui.BreadcrumbItem>
        </ui.Breadcrumb>
        <form
          aria-label="Native form"
          onSubmit={(event) => {
            event.preventDefault();
            const data = new FormData(event.currentTarget);
            const attachment = data.get('attachment');
            setSubmitted(
              JSON.stringify({
                username: data.get('username'),
                role: data.get('role'),
                topics: data.getAll('topics'),
                subscribe: data.has('subscribe'),
                plan: data.get('plan'),
                note: data.get('note'),
                filename: attachment instanceof File ? attachment.name : null,
              }),
            );
          }}
        >
          <ui.Field>
            <ui.Label htmlFor="catalog-user">Username</ui.Label>
            <ui.Control>
              <ui.Input
                id="catalog-user"
                name="username"
                ref={input}
                defaultValue="Yue"
                required
                aria-describedby="catalog-user-help"
              />
            </ui.Control>
            <ui.Help id="catalog-user-help">Use your display name.</ui.Help>
          </ui.Field>
          <ui.Field>
            <ui.Label htmlFor="catalog-role">Role</ui.Label>
            <ui.Select
              id="catalog-role"
              name="role"
              ref={select}
              defaultValue="reader"
            >
              <option value="reader">Reader</option>
              <option value="author">Author</option>
            </ui.Select>
          </ui.Field>
          <ui.Field>
            <ui.Label htmlFor="catalog-topics">Topics</ui.Label>
            <ui.Select
              id="catalog-topics"
              name="topics"
              multiple
              htmlSize={3}
              defaultValue={['docs']}
            >
              <option value="docs">Documentation</option>
              <option value="ui">Components</option>
              <option value="tests">Tests</option>
            </ui.Select>
          </ui.Field>
          <ui.Field>
            <ui.Label htmlFor="catalog-note">Note</ui.Label>
            <ui.Textarea
              id="catalog-note"
              name="note"
              ref={textarea}
              defaultValue="Ready"
            />
          </ui.Field>
          <ui.Checkboxes aria-label="Preferences">
            <ui.Checkbox name="subscribe" defaultChecked>
              Subscribe to updates
            </ui.Checkbox>
            <ui.Checkbox disabled>Unavailable preference</ui.Checkbox>
          </ui.Checkboxes>
          <ui.Radios aria-label="Plan">
            <ui.Radio name="plan" value="basic" defaultChecked>
              Basic plan
            </ui.Radio>
            <ui.Radio name="plan" value="pro">
              Pro plan
            </ui.Radio>
          </ui.Radios>
          <ui.File
            name="attachment"
            ref={file}
            filename={filename}
            data-testid="catalog-file"
            onChange={(event) =>
              setFilename(event.currentTarget.files?.[0]?.name ?? '')
            }
          >
            Attach a document
          </ui.File>
          <ui.File
            disabled
            data-testid="catalog-disabled-file"
            wrapperProps={{ id: 'catalog-disabled-file-wrapper' }}
          >
            Unavailable upload
          </ui.File>
          <ui.Button type="submit" color="primary" helpers={{ mt: 3 }}>
            Submit catalog form
          </ui.Button>
          <output data-testid="catalog-submitted">{submitted}</output>
        </form>
        <ui.Buttons helpers={{ mt: 4 }}>
          <ui.Button onClick={() => input.current?.focus()}>
            Focus catalog input
          </ui.Button>
          <ui.Button onClick={() => select.current?.focus()}>
            Focus catalog select
          </ui.Button>
          <ui.Button onClick={() => textarea.current?.focus()}>
            Focus catalog textarea
          </ui.Button>
          <ui.Button onClick={() => file.current?.focus()}>
            Focus catalog file
          </ui.Button>
          <ui.Button onClick={() => image.current?.focus()}>
            Focus catalog image
          </ui.Button>
        </ui.Buttons>
        <ui.Card data-testid="catalog-card" helpers={{ mt: 4 }}>
          <ui.CardHeader>
            <ui.CardHeaderTitle>Card example</ui.CardHeaderTitle>
            <ui.CardHeaderIcon aria-label="Card action">+</ui.CardHeaderIcon>
          </ui.CardHeader>
          <ui.CardImage>
            <ui.Image
              ref={image}
              src={picture}
              alt="Color sample"
              ratio="4by3"
              helpers={{ mt: 4 }}
              tabIndex={-1}
              wrapperProps={{ style: { width: 160 } }}
            />
          </ui.CardImage>
          <ui.CardContent>
            <ui.Content>
              <p>Native text and lists stay composable.</p>
              <ul>
                <li>One item</li>
              </ul>
            </ui.Content>
          </ui.CardContent>
          <ui.CardFooter>
            <ui.CardFooterItem href="#card-details">Details</ui.CardFooterItem>
          </ui.CardFooter>
        </ui.Card>
        <ui.Notification color="info" helpers={{ mt: 4 }}>
          A styled notification.
        </ui.Notification>
        <ui.Message color="warning">
          <ui.MessageHeader>Message example</ui.MessageHeader>
          <ui.MessageBody>
            Header and body retain their structure.
          </ui.MessageBody>
        </ui.Message>
        <ui.Tags addons>
          <ui.Tag color="success">Status</ui.Tag>
          <ui.Tag>Ready</ui.Tag>
        </ui.Tags>
        {tag && (
          <ui.Tags addons data-testid="catalog-removable-tag">
            <ui.Tag>Removable</ui.Tag>
            <ui.TagDelete
              aria-label="Remove example tag"
              onClick={() => setTag(false)}
            />
          </ui.Tags>
        )}
        <ui.Progress
          value={0}
          max={100}
          color="primary"
          aria-label="Upload progress"
        />
        <ui.TableContainer>
          <ui.Table striped bordered fullWidth>
            <caption>Component status</caption>
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">State</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Card</td>
                <td>Ready</td>
              </tr>
            </tbody>
          </ui.Table>
        </ui.TableContainer>
        <ui.Menu>
          <ui.MenuLabel>Documentation</ui.MenuLabel>
          <ui.MenuList>
            <ui.MenuItem href="#introduction" active>
              Introduction
            </ui.MenuItem>
            <ui.MenuItem
              href="#components"
              nested={
                <ui.MenuList>
                  <ui.MenuItem href="#forms">Forms</ui.MenuItem>
                </ui.MenuList>
              }
            >
              Components
            </ui.MenuItem>
          </ui.MenuList>
        </ui.Menu>
        <ui.Panel aria-label="Catalog panel">
          <ui.PanelHeading>Panel example</ui.PanelHeading>
          <ui.PanelTabs>
            <ui.PanelTab href="#all" active>
              All
            </ui.PanelTab>
            <ui.PanelTab href="#recent">Recent</ui.PanelTab>
          </ui.PanelTabs>
          <ui.PanelBlock as="a" href="#entry">
            <ui.PanelIcon aria-hidden="true">•</ui.PanelIcon>Entry
          </ui.PanelBlock>
        </ui.Panel>
        <ui.Pagination aria-label="Catalog pages">
          <ui.PaginationPrevious
            disabled
            href="#blocked"
            onClick={() => setDisabledClicks((count) => count + 1)}
          />
          <ui.PaginationNext href="#page-3" />
          <ui.PaginationList>
            <ui.PaginationLink href="#page-1">1</ui.PaginationLink>
            <ui.PaginationLink href="#page-2" current>
              2
            </ui.PaginationLink>
            <ui.PaginationEllipsis />
          </ui.PaginationList>
        </ui.Pagination>
        <output data-testid="catalog-disabled-clicks">{disabledClicks}</output>
        <ui.Title level={3} size={1} data-testid="catalog-heading">
          Independent heading size
        </ui.Title>
        <ui.Columns
          gap={0}
          multiline
          displayFrom="mobile"
          data-testid="catalog-columns"
        >
          <ui.Column
            width={{ mobile: 12, tablet: 6, desktop: 4 }}
            data-testid="catalog-column"
          >
            <ui.Box>First column</ui.Box>
          </ui.Column>
          <ui.Column width={{ mobile: 12, tablet: 6, desktop: 4 }}>
            <ui.Box>Second column</ui.Box>
          </ui.Column>
          <ui.Column width={{ mobile: 12, tablet: 6, desktop: 4 }}>
            <ui.Box>Third column</ui.Box>
          </ui.Column>
        </ui.Columns>
        <ui.FixedGrid
          columns={{ mobile: 1, tablet: 2, desktop: 3 }}
          style={{ width: 900, maxWidth: '100%' }}
          data-testid="catalog-fixed"
          gridProps={{ id: 'catalog-fixed-inner' }}
        >
          <ui.Cell>
            <ui.Box>First cell</ui.Box>
          </ui.Cell>
          <ui.Cell>
            <ui.Box>Second cell</ui.Box>
          </ui.Cell>
          <ui.Cell>
            <ui.Box>Third cell</ui.Box>
          </ui.Cell>
        </ui.FixedGrid>
        <ui.SmartGrid
          minColumnWidth="12rem"
          gap="1rem"
          autoFill
          data-testid="catalog-smart"
        >
          <ui.Cell>
            <ui.Box>Auto-sized cell</ui.Box>
          </ui.Cell>
        </ui.SmartGrid>
        <ui.Dropdown up right>
          <ui.DropdownTrigger>Open upward menu</ui.DropdownTrigger>
          <ui.DropdownMenu data-testid="catalog-up-positioner">
            <ui.DropdownContent data-testid="catalog-up-popup">
              <ui.DropdownItem>Upward first action</ui.DropdownItem>
              <ui.DropdownItem>Upward second action</ui.DropdownItem>
            </ui.DropdownContent>
          </ui.DropdownMenu>
        </ui.Dropdown>
        <custom.BulmaRoot
          style={{ '--acme-link-text': 'rgb(200, 100, 50)' } as ui.Style}
        >
          <ui.BulmaRoot
            theme="dark"
            style={
              {
                '--rb-link-text': 'rgb(11, 22, 33)',
                '--rb-code': 'rgb(44, 55, 66)',
                '--rb-strong-color': 'rgb(77, 88, 99)',
              } as ui.Style
            }
          >
            <a href="#nested-theme" data-testid="catalog-nested-link">
              Nested plain link
            </a>
            <code data-testid="catalog-nested-code">Nested code</code>
            <strong data-testid="catalog-nested-strong">Nested strong</strong>
          </ui.BulmaRoot>
        </custom.BulmaRoot>
        <reserved.BulmaRoot>
          <reserved.SmartGrid
            autoFill
            minColumnWidth="10rem"
            data-testid="catalog-reserved-grid"
          >
            <reserved.Cell>Reserved-looking prefix</reserved.Cell>
          </reserved.SmartGrid>
        </reserved.BulmaRoot>
        <ui.Hero color="primary">
          <ui.HeroHead>Hero head</ui.HeroHead>
          <ui.HeroBody>
            <ui.Title level={3}>Hero</ui.Title>
            <ui.Subtitle level={4}>Subtitle</ui.Subtitle>
          </ui.HeroBody>
          <ui.HeroFoot>Hero foot</ui.HeroFoot>
        </ui.Hero>
        <ui.Section>
          <ui.Container>
            <ui.Level>
              <ui.LevelLeft>
                <ui.LevelItem>Left</ui.LevelItem>
              </ui.LevelLeft>
              <ui.LevelRight>
                <ui.LevelItem>Right</ui.LevelItem>
              </ui.LevelRight>
            </ui.Level>
            <ui.Media>
              <ui.MediaLeft>
                <ui.Icon aria-hidden="true">●</ui.Icon>
              </ui.MediaLeft>
              <ui.MediaContent>Media content</ui.MediaContent>
              <ui.MediaRight>
                <ui.Delete aria-label="Media action" />
              </ui.MediaRight>
            </ui.Media>
          </ui.Container>
        </ui.Section>
        <ui.SkeletonBlock helpers={{ mb: 3 }} />
        <ui.SkeletonLines lines={3} />
        <ui.Footer>Catalog footer</ui.Footer>
      </ui.BulmaRoot>
    </section>
  );
}
