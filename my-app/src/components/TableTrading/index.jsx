import classNames from 'classnames';
import compactLd from 'lodash/compact';
import flattenDeepnLd from 'lodash/flattenDeep';
import  React, { useEffect, useState } from 'react';
import { TableBlockStyle } from './styles';
import { Empty } from 'antd-mobile';
export const TableTrading = props =>{

        const [activeFilter, setActiveFilter] = useState(undefined);
        const [resultData, setResultData] = useState(undefined);
        const [selectedRowKey, setSelectedRowKey] = useState(props.selectedKey);
    
        useEffect(() => {
        
            const { filters } = props;
            if (filters && filters.length > 0) {
                handleFilter(filters[0]);
            }
        }, []);
    
        useEffect(() => {
            if (selectedRowKey !== props.selectedKey) {
                setSelectedRowKey(props.selectedKey);
            }
        }, [props.selectedKey]);
    
        useEffect(() => {
            if (props.filters) {
                // tslint:disable-next-line: no-shadowed-variable
                const activeFilter = props.filters.find(filter => filter.name === activeFilter);
    
                if (activeFilter) {
                    handleFilter(activeFilter);
                }
            }
        }, [props.data]);
    
        useEffect(() => {
            if (props.onSelect) {
                selectedRowKey && props.onSelect(selectedRowKey);
            }
        }, [selectedRowKey]);
    
        const renderTitleComponent = () => {
            // tslint:disable-next-line: no-shadowed-variable
            const { titleComponent } = props;
    
            return <div className={'td-title-component'}>{titleComponent}</div>;
        };
    
        const renderRowCells = (row) => {
            // tslint:disable-next-line: no-shadowed-variable
            const { data } = props;
            const dataRow = row.map(c => c);
            const isCheckEmpty = compactLd(flattenDeepnLd(dataRow)).length === 1;
            // tslint:disable-next-line: no-shadowed-variable
            const cn = classNames({ 'td-table__empty': isCheckEmpty && (data || []).length <= 1 });
    
            return dataRow && dataRow.length
                ? dataRow.map((c, index) => {
                        return (
                            <td key={index} className={cn} colSpan={dataRow.length === 1 ? props.colSpan : undefined}>
                                {c}
                            </td>
                        );
                  })
                : [];
        };
    
        const handleFilter = (item) => {
            // tslint:disable-next-line: no-shadowed-variable
            const { data } = props;
    
            if (!item.filter) {
                setResultData(data);
    
                return;
            }
            // tslint:disable-next-line: no-shadowed-variable
            const resultData = [...data].filter(item.filter);
            setActiveFilter(item.name);
            setResultData(resultData);
        };
    
        const handleSelect = (key) => () => {
            const { onSelect } = props;
    
            if (onSelect) {
                setSelectedRowKey(key);
            }
        };
    
        const renderFilters = () => {
            // tslint:disable-next-line: no-shadowed-variable
            const { filters = [] } = props;
    
            // tslint:disable-next-line: no-shadowed-variable
            const cn = (filterName) =>
                classNames('td-table__filter', {
                    'td-table__filter--active': activeFilter === filterName,
                });
    
            return filters.map((item) => {
                const handleFilterClick = () => {
                    handleFilter(item);
                };
    
                return (
                    <div className={cn(item.name)} key={item.name} onClick={handleFilterClick}>
                        {item.name}
                    </div>
                );
            });
        };
    
        const renderHead = (row) => {
            const cells = row.map((c, index) => <th key={index}>{c}</th>);
    
            return (
                <thead className={'td-table__head'}>
                    <tr className={'td-table__head-row'}>{cells}</tr>
                </thead>
            );
        };
    
        const renderRowBackground = (i) => {
            const { rowBackground, rowBackgroundColor = 'rgba(184, 233, 245, 0.7)' } = props;
            const rowBackgroundResult = rowBackground ? rowBackground(i) : {};
            const style = {
                ...rowBackgroundResult,
                backgroundColor: rowBackgroundColor,
            };
    
            return rowBackground ? <span key={i} style={style} className="td-table-background__row" /> : null;
        };
    
        const renderBackground = (rows) => {
            const { rowBackground, side } = props;
            const dataToBeMapped = resultData || rows;
            const renderBackgroundRow = (r, i) => renderRowBackground(i);
    
            const className = classNames('td-table-background', {
                'td-table-background--left': side === 'left',
                'td-table-background--right': side === 'right',
            });
    
            return <div className={className}>{rowBackground && dataToBeMapped.map(renderBackgroundRow)}</div>;
        };
    
        // tslint:disable-next-line: no-shadowed-variable
        const renderBody = (rows, rowKeyIndex) => {
            const rowClassName = (key) =>
                classNames({
                    'td-table__row--selected': selectedRowKey === key,
                });
    
            const dataToBeMapped = resultData || rows;
            const rowElements = dataToBeMapped.map((r, i) => {
                const rowKey = String(rowKeyIndex !== undefined ? r[rowKeyIndex] : i);
    
                return (
                    <tr className={rowClassName(rowKey)} key={rowKey} onClick={handleSelect(rowKey)}>
                        {renderRowCells(r)}
                    </tr>
                );
            });
    
            return <tbody className={'td-table__body'}>{ props.data.length > 1 ? rowElements : <Empty/>}</tbody>;
        };
    
        // tslint:disable-next-line: no-shadowed-variable
        const ensureDataIsValid = (data) => {
            const length = data[0].length;
            const len = data.length;
            for (let i = 0; i < len; i += 1) {
                if (data[i].length !== length) {
                    throw Error('Array elements must have the same length');
                }
            }
        };
    
        const { data, header, titleComponent, filters = [], rowKeyIndex } = props;
    
        ensureDataIsValid(data);
    
        const cn = classNames('td-table-header__content', {
            'td-table-header__content-empty': !titleComponent && filters.length === 0,
        });
    
    
        return (
            <TableBlockStyle className="td-table-container">
                <div className={cn}>
                   
                </div>
                <table className={'td-table'}>
                    {header && header.length && renderHead(header)}
                    {renderBody(data, rowKeyIndex)}
                    
                </table>
                {renderBackground(data)}
            </TableBlockStyle>
        );

    };


