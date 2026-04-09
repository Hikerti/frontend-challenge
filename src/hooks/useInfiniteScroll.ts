import { useRef, useCallback } from 'react';

export const useInfiniteScroll = (callback: () => void, isLoading: boolean) => {
    const observer = useRef<IntersectionObserver | null>(null);

    const lastElementRef = useCallback(
        (node: HTMLDivElement) => {
            if (isLoading) return;
            if (observer.current) observer.current.disconnect();

            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    callback();
                }
            });

            if (node) observer.current.observe(node);
        },
        [isLoading, callback]
    );

    return { lastElementRef };
};