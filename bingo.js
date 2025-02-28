function bingo(ticket, win) {
    for (let i = 0; i < ticket.length; i++) {
        const symbCode = ticket[i][1];
        for (let j = 0; j < ticket[i][0].length; j++) {
            if (ticket[i][0].charCodeAt(j) === symbCode) {
                win--;
                break;
            }
        }
    }
    const result = win < 1 ? "Winner!" : "Loser!";
    return result;
}