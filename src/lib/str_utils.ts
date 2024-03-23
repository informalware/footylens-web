export function ToTitle(text: string, separator: string = ' '): string {
    return text.split(separator).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(separator);
}