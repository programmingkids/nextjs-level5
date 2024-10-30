import { LoadingSpinner } from '@/components/spinner';

export default function Loading() {
  return (
    <div className="main">
      <LoadingSpinner textColor="text-fuchsia-500" className="py-4" />
    </div>
  );
}
