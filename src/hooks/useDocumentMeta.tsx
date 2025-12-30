import { useEffect } from "react";

type Meta = {
    title?: string;
    description?: string;
    canonical?: string;
};

function upsertMeta(name: string, content: string) {
    let tag = document.head.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
    if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
    }
    tag.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
    let tag = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
    if (!tag) {
        tag = document.createElement("link");
        tag.setAttribute("rel", rel);
        document.head.appendChild(tag);
    }
    tag.setAttribute("href", href);
}

export default function useDocumentMeta(meta: Meta) {
    useEffect(() => {
        if (meta.title) document.title = meta.title;
        if (meta.description) upsertMeta("description", meta.description);
        if (meta.canonical) upsertLink("canonical", meta.canonical);
    }, [meta.title, meta.description, meta.canonical]);
}
