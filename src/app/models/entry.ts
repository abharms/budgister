export class Entry {
	date: string;
	name: string;
	description: string;
	category: string;
	debit?: number;
	credit?: number;
	isCreditCardEntry: boolean;
}