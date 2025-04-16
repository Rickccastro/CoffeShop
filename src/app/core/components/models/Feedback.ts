import { CardDisplay } from "./CardDisplay";

export interface Feedback extends CardDisplay {
    descricao: string;
    usuario: {
        nome: string;
        cargo: string;
        imageSrc: string;
        imageAlt: string;
      };
}
  
  