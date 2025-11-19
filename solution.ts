type ValueType = number | string | boolean
const formatValue = (val: ValueType) => {
    switch (typeof val) {
        case "number":
            return val * 10
        case "string":
            return val.toUpperCase()
        case "boolean":
            return val === false
    }
}

const getLength = (val: string | Array<any>): number => {
    return Array.isArray(val) ? val.length : val.length
}

class Person {
    private name: string
    private age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    public getDetails() {
        return `'Name: ${this.name}, Age: ${this.age}'`
    }
}

type BookRating = {
    title: string
    rating: number
}

const filterByRating = (books: BookRating[]): BookRating[] => {
    return books.filter(b => b.rating >= 4.0)
}

type User = {
    id: number
    name: string
    email: string
    isActive: boolean
}

const filterActiveUsers = (users: User[]): User[] => {
    return users.filter(u => u.isActive === true)
}

interface Book {
    title: string
    author: string
    publishedYear: number
    isAvailable: boolean
}

const printBookDetails = (book: Book) => {
    const { title, author, publishedYear, isAvailable } = book
    const availability = isAvailable ? "Yes" : "No"
    return `Title: ${title}, Author: ${author}, Published: ${publishedYear}, Available: ${availability}`
}

type ArrType = Array<number | string>
const getUniqueValues = (arr1: ArrType, arr2: ArrType): ArrType => {
    const unique: ArrType = []

    const pushIfMissing = (value: number | string) => {
        if (!unique.includes(value)) {
            unique.push(value)
        }
    }

    arr1.forEach(pushIfMissing)
    arr2.forEach(pushIfMissing)

    return unique
}

type Product = {
    name: string
    price: number
    quantity: number
    discount?: number
}

const calculateTotalPrice = (products: Product[]): number => {
    return products.reduce((total, current) => {
        const base = current.price * current.quantity
        const off = current.discount ? base * (current.discount / 100) : 0
        return total + (base - off)
    }, 0)
}
