export interface CardDisplay {
    id?: string;
    secondSubtitle?: string 
    title: string;
    subtitle: string;
    imageSrc: string;
    imageAlt: string;
    showButton: boolean;
    buttonText: string;
    cardOption?: 'small' | 'default';
}
  
  