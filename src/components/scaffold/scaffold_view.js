'use strict';

import React from 'react';
import Dropzone from '../dropzone/dropzone_container';

const statusIcons = {
                'done': 'fa fa-check',
             'pending': 'fa fa-hourglass',
    'unsupported file': 'fa fa-ban'
};

export default class Scaffold extends React.Component {
    constructor() {
        super();
        this.state = {counter: 0};
    }

    update() {
        this.setState({counter: this.state.counter + 1});
    }

    componentWillMount() {
        setInterval(() => this.update(), 5000);
    }

    _renderList(list) {
        return (
            <table className="table-responsive">
                <tbody>
                {
                    list.map((file, index) => (
                        <tr key={index}>
                            <td>{file.label}</td>
                            <td><i className={statusIcons[file.status]} /></td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        )
    }

    render() {
        const { list } = this.props;

        return (
            <div>
                <div style={{padding: 15}}>
                    <div className="row">
                        <div className="col col-12">
                            <h1 className="title">mitohg</h1>
                            <h3 className="subheading muted">Анализ данных митохондриальной ДНК человека</h3>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col col-12">
                            <p>
                                Данный сервис позволяет определить уровень гетероплазмии для каждой нуклеотидной позиции мтДНК по результатам <abbr title="Next Generation Sequencing">NGS</abbr>.<br/>
                                Для FASTQ-файлов выравнивание коротких прочтений производится при помощи BWA относительно последовательности RSRS.<br/>
                            </p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col col-3">
                            <h4>Загрузите подходящие SAM или FASTQ файлы:</h4>
                            <Dropzone/>
                        </div>

                        <div className="col col-4">
                            <h4>Ваши файлы:</h4>
                            {this._renderList(list)}
                        </div>

                        <div className="col col-5">
                            <h4>Результаты:</h4>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col col-12">
                            <p>
                                <small>Станислав Дрёмов, 2016</small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}