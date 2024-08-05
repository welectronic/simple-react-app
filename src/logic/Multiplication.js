import Operation from "./Operation";

class Multiplication extends Operation {
    execute(value1, value2) {
        return value1 * value2;
    }
}

export default Multiplication;