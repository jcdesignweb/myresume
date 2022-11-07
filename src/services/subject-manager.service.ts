import { SubjectManager } from '../utils/subject-manager';
import { Subject } from 'rxjs';

export const sharingInformationService = new SubjectManager();
export const sharingStageService = new Subject();