let currentClock;

function searchBackend() {
    console.log("request sent to backend");
    // fetch()
}

function debouncedSearchBackend() {
    clearTimeout(currentClock);
    currentClock = setTimeout(searchBackend, 3000); // start a clock
}



debouncedSearchBackend();
debouncedSearchBackend();
debouncedSearchBackend();
debouncedSearchBackend();
debouncedSearchBackend();
debouncedSearchBackend();
debouncedSearchBackend();
debouncedSearchBackend();