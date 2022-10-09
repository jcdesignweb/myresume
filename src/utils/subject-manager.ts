import { Subject } from 'rxjs';
import { PagesType } from '../models/pages-type';

export class SubjectManager {
    subject = new Subject();

    public getSubject() {
        return this.subject.asObservable();
    }

    public setSubject(subject : PagesType) {
        this.subject.next(subject);
    }
}
