TypeScript এ Interface এবং Type এর মধ্যে পার্থক্য

Interface এবং Type দুটোই TypeScript এ টাইপ ডিফাইন করার জন্য আমরা ব্যবহার করি , কিন্তু এগুলোর মধ্যে পার্থক্য আছে।

Interface:

Interface মূলত Object এর structure দেওয়ার জন্য।

Method বা function  signature Interface এর মধ্যে রাখা যায়।

উদাহরণ:

ts
interface Student {
 name: string
 roll: number
}


Type

Type দিয়ে শুধু Object নয়, যেকোনো ধরনের টাইপ তৈরি করা যায়, যেমন union, intersection, primitive ইত্যাদি।

একবার Type ডিফাইন করলে, পরবর্তীতে আর সেই Type আপডেট করা যায় না।

Type এর মাধ্যমে complex type যেমন union বা tuple বানানো যায়।

উদাহরণ:

ts
type Teacher = {
 name: string
 subject: string
}

type Staff = Teacher | { name: string, role: string }



TypeScript এ keyof কীওয়ার্ড ব্যবহার

keyof TypeScript এ ব্যবহার হয় কোনো অবজেক্ট টাইপের সব key বের করার জন্য। 
উদাহরণ:

ts
type Book = {
 title: string
 author: string
 publishedYear: number
}

type BookKeys = keyof Book;

const key: BookKeys = "title";


এখানে keyof বলে দিচ্ছে Book টাইপের সব প্রপার্টি কোন কোনটা। এটা union type হিসেবে কাজ করে।
