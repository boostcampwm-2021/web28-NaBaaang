export default function Buffer(size) {
    let buffer = [];

    this.push = data => {
        buffer.push(data);
    };

    this.get = () => {
        return buffer;
    };

    this.flush = () => {
        buffer = [];
    };

    this.length = () => {
        return buffer.length;
    };

    this.isFull = () => {
        return buffer.length > size;
    };
}
