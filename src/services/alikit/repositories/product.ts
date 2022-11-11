import { DOMWindow } from "jsdom";
import { AliKit } from "../core/AliKit";
import { Repository } from "../core/Repository";
import { generateProductURLFromId } from "../utils/generate-product-url";

export class Product extends Repository{
    id!: string;
    url!: string;
    dom!: DOMWindow;

    constructor(main: AliKit){
        super(main);
    }

    setId(id: string){
        this.id = id;
        this.url = "";
    }

    setURL(url: string){
        this.id = "";
        this.url = url;
    }

    async getData(){
        const url = this.url ?? generateProductURLFromId(this.id);
        if(!url) throw "First set the product id or give the product url";

        const bestURL = new URL(url).href;
        const dom = await this.main.request.domRequest(bestURL);
        
        this.dom = dom;
    }
}
