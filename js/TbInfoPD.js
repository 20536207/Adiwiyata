var
    ColumnsInfoPD = [
        {
            caption: 'Identitas Peserta Didik',
            fixed: true,
            columns: [{
                caption: 'ID KELAS',
                dataField: 'A01',
                sortOrder: 'asc',

            }, {
                caption: 'NIPD',
                dataField: 'B01',

            }, {
                caption: 'NISN',
                dataField: 'B02',

            }, {
                caption: 'Nama Lengkap',
                dataField: 'B03',

            }],
        },
        {
            caption: 'Catatan Sipil Peserta Didik',
            columns: [{
                caption: 'NIK',
                dataField: 'C01',

            }, {
                caption: 'No. Register',
                dataField: 'C02',

            }, {
                caption: 'No. Akta Kelahiran',
                dataField: 'C03',

            }, {
                caption: 'Tertanggal',
                dataField: 'C04',
                dataType: 'date',
                format: "dd MMMM yyyy",

            }, {
                caption: 'Kelamin',
                dataField: 'C05',

            }, {
                caption: 'Tempat Lahir',
                dataField: 'C06',

            }, {
                caption: 'Tanggal Lahir',
                dataField: 'C07',
                dataType: 'date',
                format: "dd MMMM yyyy",

            }, {
                caption: 'Anak Ke-',
                dataField: 'C08',

            }],
        },
        {
            caption: 'Catatan Kependudukan Peserta Didik',
            columns: [{
                caption: 'No. KK',
                dataField: 'D01',

            }, {
                caption: 'Tertanggal',
                dataField: 'D02',
                dataType: 'date',
                format: "dd MMMM yyyy",

            }, {
                caption: 'Alamat',
                dataField: 'D03',

            }, {
                caption: 'RT',
                dataField: 'D04',

            }, {
                caption: 'RW',
                dataField: 'D05',

            }, {
                caption: 'Desa/Kelurahan',
                dataField: 'D06',

            }, {
                caption: 'Kecamatan',
                dataField: 'D07',

            }, {
                caption: 'Pemerintah Daerah',
                dataField: 'D08',

            }, {
                caption: 'Pemerintah Propinsi',
                dataField: 'D09',

            }, {
                caption: 'Kode Pos',
                dataField: 'D10',

            }, {
                caption: 'Agama',
                dataField: 'D11',

            }],
        },
    ]