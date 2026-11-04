# Changelog

Notable changes to React Bulma are recorded here.

This changelog follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and releases follow [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.0.0] - 2026-11-04

First stable release.

### Added

- `BulmaRoot` with scoped styles and light, dark, and system themes. Nested roots can use different themes and prefixes.
- Configurable CSS class prefixes, with `rb-` as the default. `buildStyles` and `buildUI` generate matching CSS and component exports.
- Interactive dialogs, dropdown menus, tabs, and responsive navigation with state management, keyboard interaction, and focus handling.
- SmartGrid, FixedGrid, and Cell components for responsive grid layouts, plus Loader, SkeletonBlock, and SkeletonLines components.
- A `helpers` prop and `helpers()` function for spacing, typography, colors, display, visibility, and Flexbox layout.
- Tree-shakable exports for default components and generated custom-prefix modules. CSS is compiled as a whole.
- Support for server-side rendering and React Server Components, with client boundaries for interactive components.
- English and Chinese usage guides and Storybook examples reproduced from the pinned Bulma 1.0.4 documentation source.

### Changed

- Rebuilt the beta component API for Bulma 1.0.4, with typed native HTML attributes, events, refs, and native form behavior.
- Raised the minimum React and React DOM versions to 17.0.2.
- Replaced global, unprefixed styles with a scoped stylesheet that requires CSS `@scope` and container query support.
- Separated runtime exports from build-time style generation, with ESM and CommonJS runtime builds.

[unreleased]: https://github.com/seagreenio/react-bulma/compare/1.0.0...HEAD
[1.0.0]: https://github.com/seagreenio/react-bulma/compare/v0.1.0-beta.4...1.0.0
