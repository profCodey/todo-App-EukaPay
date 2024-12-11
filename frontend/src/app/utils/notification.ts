import { toast } from 'react-toastify';

export const notify = (content:string, type: 'success' | 'error') => {
    if (type === 'error') toast.error(content)
    else if (type === 'success') toast.success(content)
    else toast(content)
};