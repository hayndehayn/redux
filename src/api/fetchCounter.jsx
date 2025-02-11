// const API_ENDPOINT = '/api/counter';

// export const fetchCounterValue = async () => {
//     try {
//         const response = await fetch(API_ENDPOINT);

//         if (!response.ok) {
//             const errorText = await response.text();
//             console.error(`API Error: ${response.status} - ${response.statusText}`, errorText);
//             throw new Error(`API request failed with status ${response.status}: ${errorText || response.statusText}`);
//         }

//         const data = await response.json();
//         return data.value;

//     } catch (error) {
//         console.error("Error fetching counter value:", error);
//         throw error;
//     }
// };