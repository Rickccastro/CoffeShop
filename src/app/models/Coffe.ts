import { CardDisplay } from "./CardDisplay";

export interface Coffe extends CardDisplay {
  id?: string;
  subtitle: string;
  secondSubtitle?: string 
  title: string;
  imageSrc: string;
  imageAlt: string;
 }

