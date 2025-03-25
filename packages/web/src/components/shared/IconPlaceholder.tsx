import { cn } from '@/lib/utils';

const IconPlaceholder = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        'rounded-full flex items-center justify-center bg-[#DEDEDE] dark:bg-[#D9D9D9] flex-shrink-0',
        className ?? 'w-6 h-6'
      )}
    ></div>
  );
};

export default IconPlaceholder;
