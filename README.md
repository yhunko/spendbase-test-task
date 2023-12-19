# React (SWC) + TypeScript + Vite

## Technologies

### Main tech stack

- React
- TailwindCSS
- @tanstack/react-query

### Unit Testing:

- Vitest

### Tools
- Prettier
- ESLint

## Architecture design

Based on [Feature sliced design (FSD)](https://feature-sliced.design/)

## Key task points

- Decided to go with minimalist approach - HTML native components + Tailwind styling. Basically the same could be done with Material UI or any other UI kit without any trouble. But for small (and not only) CSS styling I prefer to use Tailwind with handy conditional styling (`className={clsx('flex flex-row', isMobile && 'flex-col')}`)
- For drag and drop / sort support it's better to use [DnD Kit](https://docs.dndkit.com/presets/sortable) in my opinion, but requires investigation regarding the implementation for tree view structure, which will require more than 2 days for me right now.
- As for performance optimisations for very large datasets I would go with virtual scroll. Since it's better to have fixed width and height for the list to avoid UI jumps, it's very good opportunity for virtualization implementation, since it requires fixed height in order to calculate the render offset properly.
