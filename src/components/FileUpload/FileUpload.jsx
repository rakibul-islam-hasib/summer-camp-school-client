import React from 'react';
import Alpine from 'alpinejs';
import createFileList from 'create-file-list'
const FileUpload = () => {
    React.useEffect(() => {
        Alpine.data('dataFileDnD', dataFileDnD);
        Alpine.start();
    }, []);

    function dataFileDnD() {
        return {
            files: [],
            fileDragging: null,
            fileDropping: null,
            humanFileSize(size) {
                const i = Math.floor(Math.log(size) / Math.log(1024));
                return (
                    (size / Math.pow(1024, i)).toFixed(2) * 1 +
                    ' ' +
                    ['B', 'kB', 'MB', 'GB', 'TB'][i]
                );
            },
            remove(index) {
                let files = [...this.files];
                files.splice(index, 1);

                this.files = createFileList(files);
            },
            drop(e) {
                let removed, add;
                let files = [...this.files];

                removed = files.splice(this.fileDragging, 1);
                files.splice(this.fileDropping, 0, ...removed);

                this.files = createFileList(files);

                this.fileDropping = null;
                this.fileDragging = null;
            },
            dragenter(e) {
                let targetElem = e.target.closest('[draggable]');

                this.fileDropping = targetElem.getAttribute('data-index');
            },
            dragstart(e) {
                this.fileDragging = e.target.closest('[draggable]').getAttribute('data-index');
                e.dataTransfer.effectAllowed = 'move';
            },
            loadFile(file) {
                const preview = document.querySelectorAll('.preview');
                const blobUrl = URL.createObjectURL(file);

                preview.forEach((elem) => {
                    elem.onload = () => {
                        URL.revokeObjectURL(elem.src); // free memory
                    };
                });

                return blobUrl;
            },
            addFiles(e) {
                const files = createFileList([...this.files], [...e.target.files]);
                this.files = files;
                this.form.formData.files = [...files];
            },
        };
    }
    return (
        <div>

        </div>
    );
};

export default FileUpload;