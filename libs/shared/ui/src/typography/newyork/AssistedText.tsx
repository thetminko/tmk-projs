import { cn } from '../../utils';
import type { TypographyProps } from '../type';
import { P } from './P';

export function AssistedText({ children, className }: TypographyProps) {
  return <P className={cn('text-muted-foreground text-xs italic', className)}>{children}</P>;
}
