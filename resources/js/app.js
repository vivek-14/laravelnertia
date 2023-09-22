import { createApp, h } from "vue";
import { createInertiaApp, Head } from "@inertiajs/vue3";
import Layout from "./Shared/Layout.vue";

createInertiaApp({
    resolve: (name) => {
        const pages = import.meta.glob("./Pages/**/*.vue", { eager: true });

        let page = pages[`./Pages/${name}.vue`];
        page.default.layout = page.default.layout || Layout;

        return page;
    },

    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .component("Head", Head)
            .mount(el);
    },

    progress: {
        color: "#29d",
        showSpinner: true,
    },

    title: (title) => "My App -" + title,
});
