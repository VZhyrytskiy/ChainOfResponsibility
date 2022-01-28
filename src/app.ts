const files = ['file1.docx', 'file2.zip', 'file3.mp3', 'file4.avi'];

(function processFiles(fileNames: string[]): void {
    console.log('---if else-if else-if ... else---');

    fileNames.forEach(fileName => {
        if (fileName.endsWith('.txt')) {
            console.log('I am running notepad... I pass file to it.');
        } else if (fileName.endsWith('.docx')) {
            console.log('I am running MS Word... I pass file to it.');
        } else if (fileName.endsWith('.xlsx')) {
            console.log('I am running MS Excel... I pass file to it.');
        } else if (fileName.endsWith('.jpg')) {
            console.log('I am running Paint... I pass file to it.');
        } else if (fileName.endsWith('.mp3')) {
            console.log('I am running Mp3 Player... I pass file to it.');
        } else if (fileName.endsWith('.mpg4')) {
            console.log('I am running Video Player... I pass file to it.');
        } else if (fileName.endsWith('.zip')) {
            console.log('I am running WinZip... I pass file to it.');
        } else {
            console.log(`I can not process ${fileName}`);
        }
    });
})(files);