// Hjälpfunktion att använda i valfri komponent för att fetcha data
export async function get(url: string) {
    const response = await fetch(url);

    // Kastar alltid error om något går fel
    if (!response.ok) {
        throw new Error("Gick inte att hämta data!");
    }

    const data = await response.json() as unknown;
    return data;
} 