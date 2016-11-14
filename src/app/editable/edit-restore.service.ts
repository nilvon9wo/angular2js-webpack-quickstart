export class EditRestoreService<T> {
    originalItem: T;
    currentItem: T;

    clone( item: T ): T {
        return JSON.parse(JSON.stringify(item));
    }

    getItem(): T {
        return this.currentItem;
    }

    restoreItem(): T {
        this.currentItem = this.originalItem;
        return this.getItem();
    }

    setItem( item: T ) {
        this.originalItem = item;
        this.currentItem = this.clone( item );
    }
}