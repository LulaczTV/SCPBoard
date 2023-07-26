export function clearTags(text: string): string {
    return text.replace(/<[^>]*?>/g, '').replaceAll('█', '');
}

export function getFramework(text: string): string {
    const matches = text.match(/[a-zA-Z]+ \d+\.\d+\.\d+/g);
    return matches ? matches[0] : 'None';
}

export function formatDate(date: Date): string {
    if (!(date instanceof Date)) { throw new TypeError("Incorrect data type. Must be Date object"); }
    return `${("00" + date.getDate()).slice(-2)}.${("00" + (date.getMonth() + 1)).slice(-2)}.${date.getFullYear()}  ${("00" + date.getHours()).slice(-2)}:${("00" + date.getMinutes()).slice(-2)}:${("00" + date.getSeconds()).slice(-2)}`;
}
