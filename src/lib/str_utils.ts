/**
 * Transforma um texto lowercase botando as primeiras letras de cada palavra como maíusculas
 * @param text texto original
 * @param separator o que define a separação de palavras
 * @returns nova string com a modificação aplicada
 */
export function ToTitle(text: string, separator: string = ' '): string {
    return text.split(separator)
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(separator);
}

/**
 * Formata milisegundos em tempo _human readable_
 * @param millis tempo em ms
 * @param force força a string a mostrar horas e minutos  
 * @returns string do tempo no formato hh:mm:ss
 */
export function millisToString(millis: number, force: boolean = false): string {
    let secs = Math.floor(millis / 1000); 
    if (secs < 60 && !force)
        return `${secs}s`;

    let mins = Math.floor(secs / 60);
    secs %= 60;
    if (mins < 60 && !force)
        return `${mins}:${secs.toString().padStart(2, '0')}`;

    const hours = Math.floor(mins / 60);
    mins %= 60;
    return `${hours}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

export function stringToDate(source: string | undefined): string | undefined {
    if (source === undefined) return undefined;
    const date = new Date(source);
    return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth()+1).toString().padStart(2, '0')}/${date.getFullYear()}`
}