import { ReactNode, ButtonHTMLAttributes } from 'react';

import { FaSpinner } from 'react-icons/fa';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    loading?: boolean,
    children: ReactNode,
}

export function Button({ loading, children, ...rest }: ButtonProps) {
    return (
       
            <button
                disabled={loading}
                {...rest}
            >
                {loading ? <FaSpinner className='animate-spin ' color='#fff' size={16}/>  : <a>{children}</a>}

            </button>
       
    )
}