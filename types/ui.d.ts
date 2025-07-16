import { LucideIcon } from "lucide-react"
import { ButtonHTMLAttributes } from "react"

declare module "@/components/ui/button" {
  interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
    size?: "default" | "sm" | "lg" | "icon"
    asChild?: boolean
  }
  export const Button: React.FC<ButtonProps>
}

declare module "@/components/ui/card" {
  interface CardProps {
    className?: string
    children: React.ReactNode
  }
  interface BadgeProps {
    variant?: "default" | "secondary" | "destructive" | "outline"
    className?: string
    children: React.ReactNode
  }
  interface SeparatorProps {
    className?: string
    orientation?: "horizontal" | "vertical"
  }
  export const Card: React.FC<CardProps>
  export const Badge: React.FC<BadgeProps>
  export const Separator: React.FC<SeparatorProps>
}

declare module "lucide-react" {
  interface IconProps {
    className?: string
  }
  export const Moon: React.FC<IconProps>
  export const Sun: React.FC<IconProps>
  export const Mail: React.FC<IconProps>
  export const Github: React.FC<IconProps>
  export const MapPin: React.FC<IconProps>
  export const GraduationCap: React.FC<IconProps>
  export const Briefcase: React.FC<IconProps>
  export const Download: React.FC<IconProps>
  export const ExternalLink: React.FC<IconProps>
  export const Phone: React.FC<IconProps>
  export const Linkedin: React.FC<IconProps>
}
