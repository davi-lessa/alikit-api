import { DOMWindow } from "jsdom";
import { AliKit } from "../core/AliKit";
import { ProductModule } from "../core/ProductModule";
import { Repository } from "../core/Repository";
import { generateProductURLFromId } from "../utils/generate-product-url";
import { ProductModules } from "./product.modules";

export class Product extends Repository{
    id!: string;
    url!: string;
    private dom!: DOMWindow;

    constructor(main: AliKit){
        super(main);
    }

    public modules: ProductModules = new ProductModules(this);

    setId(id: string){
        this.id = id;
        this.url = "";
        return this
    }

    setURL(url: string){
        this.id = "";
        this.url = url;
        return this
    }

    getCurrentURL(){
        const url = this.url || generateProductURLFromId(this.id);
        const bestURL = new URL(url).href;
        return url
    }

    async getData(){
        const url = this.getCurrentURL();
        if(!url) throw "First set the product id or give the product url";

        const dom = await this.main.request.domRequest(url);
        this.dom = dom;
        return dom
    }
}
