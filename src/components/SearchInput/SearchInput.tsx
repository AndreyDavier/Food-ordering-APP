import { forwardRef } from 'react';
import styles from './SearchInput.module.scss';
import cn from 'classnames';
import { SearchInputProps } from './SearchInput.props';

const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(function Input({ classNames, isValid = true, ...props }, ref) {
	return (
		<div className={styles['input-wrapper']}>
			<input {...props} ref={ref} className={cn(styles['input'], classNames, {
				[styles['invalid']]: !isValid
			})} />
			<img className={styles['search-icon']} src="/search.svg" alt="" />
		</div>
	);
});

export default SearchInput;