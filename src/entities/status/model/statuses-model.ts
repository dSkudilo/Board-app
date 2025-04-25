import { StatusPayload } from './types';
import { nanoid } from 'nanoid';
import { statusesRepository } from '@/entities/status/model/statuses-repository';

export function statusesModel() {
  const createStatus = async (data: StatusPayload) => {
    const newStatus = { id: nanoid(), ...data };
    await statusesRepository.addStatus(newStatus);
  };

  return { createStatus };
}
