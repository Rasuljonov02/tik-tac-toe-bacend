const url = "http://localhost:4000/api/tic-tac-toe/reset/";

export async function zz(id: any) {
 try {
     const url = `http://localhost:4000/api/tic-tac-toe/reset/${id}`;  // Adjust the URL structure according to your server's requirements

     const response = await fetch(url, {
         method: "PUT",
         headers: {
             "Content-Type": "application/json",
         },

         body: JSON.stringify({
             id: id,
         }),
     });

     if (!response.ok) {
         const errorText = await response.text();
         throw new Error(`Network response was not ok. Response: ${errorText}`);
     }

     const responseData = await response.json();
     console.log("Refresh successful. Updated game state:", responseData.gameState);


 } catch (error) {
     console.error("Error sending PUT request:", error);

 }
}
