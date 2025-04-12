export interface CardDisplay {
    id?: string;
    subtitle: string;
    secondSubtitle?: string;
    title: string;
    imageSrc: string;
    imageAlt: string;
    showButton: boolean;
    buttonText: string;
    cardOption?: 'small' | 'default';
}
  
  