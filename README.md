# Building a Javascript-written back-end API for the AliKit project.

This project will mainly use Express to manage and provide endpoints to be used from the AliKit's Front-end project, as well as packages for data extraction.
The inspiration comes from an experience dealing with e-commerce scenary, in which many tools can be found to be used for supporting tasks (even plugins), but most of them are paid or have only a single specific function.
The idea here is to unite small solutions that can help and speed up small reseller's work.

# The method behind the construction

To build this API, it's firstly necessary to understand the Aliexpress website modus-operandi.
This can be done, for example, by observing the browser's Dev Tools Network tab's behavior as long as we interact with a product page.

1. On doing this, we can see that some information is brought to the page via server-side rendering ( probably in order to improve the product's SEO for search crawlers ).

We can notice, for example, that in this process the main page sets a global variable called runParams, which is very valuable because it exposes many modules of the application, like priceModule, shippingModule and so on, as well as some data like the current csrf token.

2. However, we can also see that other information is loaded asynchronously from Aliexpress, like customer's reviews.

It can happen this way because it's useful to save requests, for example, between client and server or between server and databases. As with lazy-loading images, in terms of saving resources, data is better to be loaded as long as the customer interact to the page, scrolling or doing some action, because some people don't navigate in the page to the point of seeing the reviews. It's also better to for the page's First Contentful Paint (FCP), as there is fewer resources to block / slow down rendering.

So we now have 2 findings, which will guide the next steps of our research.

# The runParams variable and how to handle it

It represents an object that contains various data, such as modules, which in this case are basically organized information that revolves around the product.

To access this variable, we have to interact with the page's scripts, so this can't be done by a standard fetch. This is possible by using JSDOM, a library which has a purpose of simulating somehow a web browser to handle the raw data extracted, thus providing a DOM. Unlike Cheerio, it also provides the ability to run scripts to access and interact with the page, which is exactly what we need here.
[...]
