# Boosting Tree Grid performance with Virtual Scrolling mode

The Syncfusion Tree Grid component is a high-performance component that manages data loading and operations with ease. Regardless of how successful the component is at processing enormous amounts of data, the browser's engine must deliver decent web page performance when working with large DOM elements.

Since the tree grid has the same number of rows and columns elements as the huge data, the DOM elements grow in proportion to the size of the data. As a result, under today's standards, all browser engines are incapable of handling large DOM elements.

We created the feature Virtualization to address the concerns about huge data creating additional DOM elements, and I'll talk about it here to improve tree grid performance.

Once run this sample demo, it appears like all of the records (25,000) are loaded with 25,000 DOM row elements.

However, only 150 row elements are rendered in the DOM, and other row elements do not need to be rendered in the initial rendering because the view port is relatively limited and small. As a result, we lighten the browser's load by minimizing DOM elements and rendering elements only when they're needed.

You may think about the non-availability of rest of row elements for the rest of the records. Those row elements would be rendered in DOM only when they are truly needed and requested. To explain more clearly, Typically, a user would have to scroll the vertical scrollbar usually to see the hidden row elements. We then used that scroll event to load the next set of row elements to render in the DOM.

Consequently, the rows are rendered on demand when user scrolls. Hence it looks like normal scrolling feature but actually, the rows are rendered in DOM on-demand.

To make the experience even smoother to user, we provide two mode of Virtualization. The first is Virtual Scrolling, in which row elements are loaded as the user begins to scroll, and the second is Infinite Scrolling, in which row elements are loaded as the scroll bar is moved to the end (Facebook scrolling)

1. Virtual Scrolling – Sample Demo: [https://stackblitz.com/edit/hmczae-u9iwno?file=index.ts](https://stackblitz.com/edit/hmczae-u9iwno?file=index.ts)
2. Infinite Scrolling – Sample Demo: [https://stackblitz.com/edit/hmczae-dc7xrx?file=index.ts](https://stackblitz.com/edit/hmczae-dc7xrx?file=index.ts)

# Now I'll go over the behavior of each of these modes one by one.

# Virtual Scrolling

As I said in the beginning, it appears to be normal scrolling with the scrollbar size based on the total records. And while the scrolling, corresponding view row elements are rendered in DOM on demand dynamically.

To provide a better experience, we render elements not only for the current view port but also for the upcoming view port (for example, the next three pages' set of row elements are rendered along the current view port rows).

By default, 50 row elements are rendered for a view port and you can even change it by using **pageSize** property of **pageSettings.** For too technical, you go through the below UG documentation.

[https://ej2.syncfusion.com/documentation/treegrid/virtual/#row-virtualization](https://ej2.syncfusion.com/documentation/treegrid/virtual/#row-virtualization)

# Infinite Scrolling

Most of us are familiar with how scrolling works on the Facebook web page. This is a good example of Infinite scrolling mode.

Whenever the user moves the scrollbar to the end, its starts loading the next set of row elements until all records are rendered as row elements in DOM

For more information, kindly refer the below UG documentation.

[https://ej2.syncfusion.com/documentation/treegrid/infinite-scroll/](https://ej2.syncfusion.com/documentation/treegrid/infinite-scroll/)

Finally, let's look at the performance metrics of Tree Grid loading time for 25K records with and without virtualization feature. These performance metrics are also available in the sample demo link which I given above.

| **Without Virtualization (Normal Scrolling)** | **Virtual Scrolling** | **Infinite Scrolling** |
| --- | --- | --- |
| 6994 ms | 644 ms | 912 ms |

# Conclusion

So now you know how you can further boost the performance of Tree Grid component using the Virtualization concept. I hope it helps you with your application requirements.

If you would like to try the TreeGrid component, you can download our [free trial](https://www.syncfusion.com/downloads/essential-js2/confirm). You can check our [sample browser](https://ej2.syncfusion.com/demos/#/material/tree-grid/virtual-scrolling.html) and [documentation](https://ej2.syncfusion.com/documentation/treegrid/virtual/) for detailed explanations and the facts you need to proceed further.

Feel free to share your feedback or questions in the comments section below. You can also contact us through our [support forums](https://www.syncfusion.com/forums), [Direct-Trac](https://www.syncfusion.com/account/login), or [feedback portal](https://www.syncfusion.com/feedback/). We are always happy to assist you!