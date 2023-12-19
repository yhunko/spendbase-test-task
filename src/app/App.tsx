import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { MainLayout } from '@widgets/layout/MainLayout.tsx';

import { FileTree } from '@entities/file-tree/FileTree.tsx';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MainLayout>
        <FileTree />
      </MainLayout>
    </QueryClientProvider>
  );
}

export default App;
