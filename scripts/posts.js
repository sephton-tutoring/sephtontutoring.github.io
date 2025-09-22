fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vTxmDHV6JtpFvrEAGeOy1De66BqZcVqwgh6itsFFN6MdpC6KMySw444HqSWvtY7ehfeOj4lJ7yZMpX6/pub?output=csv') 
.then(response => response.text())
.then(data => {
    const rows = data.split('\n').slice(1); // skip header row
    const container = document.getElementById('text-posts');

    rows.forEach(row => {
        const columns = row.split(','); // split row into cells
        const date = columns[0]?.trim();
        const text = columns[1]?.trim();

        // create a wrapper div so we can style each post as a "card"
        const post = document.createElement('div');
        post.className = 'text-post';

        // date element
        const dateEl = document.createElement('span');
        dateEl.className = 'post-date';
        dateEl.textContent = date;

        // text element
        const textEl = document.createElement('p');
        textEl.className = 'post-text';
        textEl.textContent = text;

        // append to post box
        post.appendChild(dateEl);
        post.appendChild(textEl);

        container.appendChild(post);
    });
});


// fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vTxmDHV6JtpFvrEAGeOy1De66BqZcVqwgh6itsFFN6MdpC6KMySw444HqSWvtY7ehfeOj4lJ7yZMpX6/pub?output=csv')
// .then(response => response.text())
// .then(data => {
//     const rows = data.split('\n').slice(1); // skip header
//     const container = document.getElementById('text-posts');
//     rows.forEach(row => {
//     const post = document.createElement('p');
//     post.textContent = row.trim();
//     post.className = 'text-post';
//     container.appendChild(post);
//     });
// });


