// Base types for better type safety
export interface BookingData {
  id: string;
  incoterm: string;
  from: string;
  to: string;
  dateLabel: string;
  bookingCode: string;
  cargo: CargoData;
  vessel: string;
  service: string;
  requestsCount: number;
  partnerBadges?: string[];
  shipperLogo?: string;
}

export interface CargoData {
  description: string;
  containers: string;
  unitsLabel: string;
}

export interface RouteData {
  from: string;
  to: string;
  dateLabel: string;
  id?: string;
}

export interface BookingMetaData {
  bookingCode: string;
  cargo: CargoData;
  vessel: string;
  service: string;
  shipperLogo?: string;
  partnerBadges?: string[];
}

// Component prop types
export interface BookingCardProps {
  data: BookingData;
  onManage?: (id: string) => void;
}

export interface RouteRowProps {
  from: string;
  to: string;
  dateLabel: string;
  id?: string;
}

export interface BookingMetaProps {
  bookingCode: string;
  cargo: CargoData;
  vessel: string;
  service: string;
  shipperLogo?: string;
  partnerBadges?: string[];
}

export interface BookingListProps {
  items: BookingData[];
  onManage?: (id: string) => void;
}

// Card component types
export type CardType = "booking" | "info";

export type CardProps = {
  type: "booking";
  data: BookingData;
  onManage?: (id: string) => void;
} | {
  type: "info";
};

// Icon props
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

// Badge props
export interface BadgeProps {
  children: React.ReactNode;
  color?: string;
  className?: string;
}

// Label props
export interface LabelProps {
  title: string;
  value: React.ReactNode;
}

// Stat props
export interface StatProps {
  value: React.ReactNode;
  hint?: string;
}

// Button props
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

// InfoCard types
export interface InfoCardData {
  statusItems: StatusItem[];
  infoColumns: InfoColumn[];
  primaryAction: string;
}

export interface StatusItem {
  label?: string;
  value: string;
  icon?: React.ReactNode;
  isExpandable?: boolean;
}

export interface InfoItem {
  label: string;
  value: string;
  isLabel?: boolean;
}

export interface InfoColumn {
  items: InfoItem[];
}
