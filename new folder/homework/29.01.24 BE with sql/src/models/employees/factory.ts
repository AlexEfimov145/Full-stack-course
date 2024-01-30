import Model from "./model";
import employee from "./mysql";


export default function getModel(): Model {
    return employee;
}