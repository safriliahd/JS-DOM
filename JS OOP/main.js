class Kendaraan {
    constructor(model, merk, harga){
        this.model = model;
        this.merk = merk;
        this.harga = harga;
    }
    maju() {
        return `mesin ${this.merk} ${this.model} berjalan maju`;
    }
    berhenti() {
        return `mesin ${this.merk} ${this.model} berhenti`;
    }
}
 let mobil = new Kendaraan("Supra", "Toyota", 2100000);
 let motor = new Kendaraan("CBR", "Honda", 30000000);

 class Siswa {
    constructor(nama, kelas, absen){
        this.nama = nama;
        this.kelas = kelas;
        this.absen = absen;
    }

    belajar() {
        return `siswa yang bernama ${this.nama} kelas ${this.kelas} sedang belajar`;
    }

    presentasi() {
        return `siswa yang bernama ${this.nama} kelas ${this.kelas} sedang melakukan presentasi`;
    }
 }

 let siswa1 = new Siswa("Hida", "XI PPLG 2", 29);
 let siswa2 = new Siswa("Rheva", "XI PPLG 2", 24);

 console.log(mobil.maju());
 console.log(motor.berhenti());

 console.log(siswa1.belajar());
 console.log(siswa2.presentasi());