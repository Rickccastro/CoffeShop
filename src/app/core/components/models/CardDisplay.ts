export interface CardDisplay {
    id?: string;
    title?: string;
    subtitle?: string;
    secondSubtitle?: string;
    imageSrc: string;
    imageAlt: string;
    showButton?: boolean;
    buttonText?: string;
    cardOption?: 'small' | 'default';
}
  
  