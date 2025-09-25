import { LucideIcon } from 'lucide-react';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface MetricCardProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
  footerText?: string;
  footerSubtext?: string;
  footerIcon?: LucideIcon;
  className?: string;
  cardAction?: React.ReactNode;
}

const MetricCard: React.FC<MetricCardProps> = ({
  title,
  description,
  children,
  footerText,
  footerSubtext,
  footerIcon: FooterIcon,
  className = '',
  cardAction,
}) => {
  return (
    <Card className={className}>
      {(title || description) && (
        <CardHeader className="flex flex-1 items-center justify-between gap-2 space-y-0 border-b py-0 sm:flex-row">
          <div className="grid gap-1">
            {title && <CardTitle>{title}</CardTitle>}
            {description && <CardDescription>{description}</CardDescription>}
          </div>
          {cardAction && <CardAction>{cardAction}</CardAction>}
        </CardHeader>
      )}

      <CardContent className="h-full">{children}</CardContent>

      {(footerText || footerSubtext) && (
        <CardFooter>
          <div className="flex w-full items-start gap-2 text-sm">
            <div className="grid gap-2">
              {footerText && (
                <div className="flex items-center gap-2 leading-none font-medium">
                  {footerText}
                  {FooterIcon && <FooterIcon className="h-4 w-4" />}
                </div>
              )}
              {footerSubtext && (
                <div className="text-muted-foreground flex items-center gap-2 leading-none">
                  {footerSubtext}
                </div>
              )}
            </div>
          </div>
        </CardFooter>
      )}
    </Card>
  );
};

export default MetricCard;
