import { cn } from '../../utils';
import type { TypographyProps } from '../type';

export function P({ children, className }: TypographyProps) {
  return <p className={cn('text-primary leading-7', className)}>{children}</p>;
}
