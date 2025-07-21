        function download() {
            window.open('https://github.com/BubbuDert249/bedrockforge/releases', '_blank');
        }

        function downloadFile() {
            const link = document.createElement('a');
            link.href = 'testmod.bdr';  // Path to your local file relative to your HTML file
            link.download = 'testmod.bdr';    // Suggested filename
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
