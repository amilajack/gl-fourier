import fft from 'ndarray-fft';
import ndarray from 'ndarray';

export default function (N,data) {
	var arr = ndarray(data, [N, 1]);

	return function () {
		fft(1, arr, arr);
	}
}